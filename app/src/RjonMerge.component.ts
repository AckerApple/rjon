import { Component, Output, EventEmitter } from '@angular/core'
import { fxArray } from "./rjon/prefx"
import { AppData } from "./AppData"
import { string as rjonMerge } from "./templates/rjon-merge.pug"
import { array } from "ack-angular/pipes.class"

@Component({
  selector: 'rjon-merge',
  template: rjonMerge,
  animations: fxArray
}) export class RjonMerge {
  mergeRjonString
  rjonMerge = {}
  viewRjonMergeResults:boolean
  mergeError
  compareResults = {
    add:{hosts:[], routes:[]},
    drop:{hosts:[], routes:[]}
  }

  @Output() public onMerge = new EventEmitter()

  constructor(public AppData:AppData){}

  compareRjon(rjonString){
    //this.viewRjonMerge = !this.viewRjonMerge
    if(this.viewRjonMergeResults)return this.viewRjonMergeResults = false

    this.viewRjonMergeResults = true

    try{
      rjonString = rjonString.replace(/\u003d/g,'&')
      this.rjonMerge = JSON.parse(rjonString)
      this.compareResults = this.getRjonCompare(this.AppData.rjon, this.rjonMerge)
    }catch(e){
      this.rjonMerge = null
      this.compareResults = null
      this.mergeError = e
      console.log(e)
    }
  }

  mergeRjon(rjonString){
    try{
      rjonString = rjonString.replace(/\u003d/g,'&')
      const rjon = JSON.parse(rjonString)
      const save = this.getRjonMerge(this.AppData.rjon, rjon)
      this.AppData.setSaveRjon(this.AppData.rjon)
    }catch(e){
      console.log(e)
      this.mergeError = e
    }
  }

  getRjonCompare(rjon0, rjon1){
    const drop = {routes:[], hosts:[]}
    const add = {routes:[], hosts:[]}

    if(rjon1.routes && rjon0.routes){
      rjon1.routes.forEach(route=>{
        for(let x=0; x < rjon0.routes.length; ++x){
          if(rjon0.routes[x].path==route.path && rjon0.routes[x].method==route.method){
            return
          }
        }
        add.routes.push(route)
      })

      rjon0.routes.forEach(route=>{
        for(let x=0; x < rjon1.routes.length; ++x){
          if(rjon1.routes[x].path==route.path && rjon1.routes[x].method==route.method){
            return
          }
        }
        drop.routes.push(route)
      })
    }

    if(rjon1.hosts && rjon0.hosts){
      rjon1.hosts.forEach(host=>{
        for(let x=0; x < rjon0.hosts.length; ++x){
          if(rjon0.hosts[x].hostname==host.hostname){
            return
          }
        }
        add.hosts.push(host)
      })
      
      rjon0.hosts.forEach(host=>{
        for(let x=0; x < rjon1.hosts.length; ++x){
          if(rjon1.hosts[x].hostname==host.hostname){
            return
          }
        }
        drop.hosts.push(host)
      })
    }

    return { add, drop }
  }

  mergeRoutes(route0, route1){
    if(route1.sample && route0.sample){
      const sample0Array = array(route0.sample)
      const sample1Array = array(route1.sample)
      
      for(let x=sample1Array.length-1; x >= 0; --x){
        if(sample0Array.length < x)sample0Array.push({})

        if(sample0Array[x].test && sample1Array[x].test){
          Object.assign(sample1Array[x].test, sample0Array[x].test)
        }
        
        Object.assign(sample1Array[x], sample0Array[x])
      }

      route1.sample = route0.sample
    }else if(route0.sample){
      route1.sample = route0.sample
    }

    Object.assign(route0, route1)
  }

  getRjonMerge(rjon0, rjon1){
    rjon1.routes.forEach(route=>{
      for(let x=0; x < rjon0.routes.length; ++x){
        if(rjon0.routes[x].path==route.path && rjon0.routes[x].method==route.method){
          return this.mergeRoutes(rjon0.routes[x], route)
        }
      }
      rjon0.routes.push(route)
    })

    rjon1.hosts.forEach(host=>{
      for(let x=0; x < rjon0.hosts.length; ++x){
        if(rjon0.hosts[x].hostname==host.hostname){
          return Object.assign(rjon0.hosts[x], host)
        }
      }
      rjon0.hosts.push(host)
    })

    return rjon0
  }

  dropRoute(route){
    for(let i=this.AppData.rjon.routes.length-1; i >= 0; --i){
      let iRoute = this.AppData.rjon.routes[i]
      if(route==iRoute){
        return this.AppData.rjon.routes.splice(i,1)
      }
    }
  }

  dedup(){
    this.AppData.rjon.routes.forEach((route,i)=>{
      for(let x=0; x < this.AppData.rjon.routes.length; ++x){
        if(this.AppData.rjon.routes[i] == this.AppData.rjon.routes[x]){
          continue
        }

        if(route.path == this.AppData.rjon.routes[x].path){
          this.AppData.rjon.routes.splice(x,1)
        }
      }
    })

    this.AppData.rjon.hosts.forEach((host,i)=>{
      for(let x=0; x < this.AppData.rjon.hosts.length; ++x){
        if(this.AppData.rjon.hosts[i] == this.AppData.rjon.hosts[x]){
          continue
        }

        if(host.hostname == this.AppData.rjon.hosts[x].hostname){
          this.AppData.rjon.hosts.splice(x,1)
        }
      }
    })

    this.AppData.setSaveRjon( this.AppData.rjon )
  }
}