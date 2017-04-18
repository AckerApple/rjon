import { AckOffline } from "ack-angular"
import { Component, EventEmitter } from '@angular/core'
import { fxArray } from "./prefx"
import { AppData } from "./AppData"
import { string as overviewComponent } from "./templates/overview-component.pug"

@Component({
  selector: 'overview-component',
  template: overviewComponent,
  animations: fxArray
}) export class OverviewComponent {
  //public rjonSaves={}
  public saveOfflineName
  public error
  public mergeError
  public rjonMerge
  public viewRjonMerge:boolean
  public viewRjonMergeResults:boolean

  public compareResults = {
    add:{hosts:[], routes:[]},
    drop:{hosts:[], routes:[]}
  }

  constructor(public AppData:AppData, public AckOffline:AckOffline){}

  loadByOfflineName(name){
    //this.saveOfflineName = name
    if(!name)return
    this.AppData.setRjonString( this.AppData.rjonSaves[name] )
  }

  setSaveRjonStringAs(string, name){
    if(!name)return this.AppData.saveOffline(string);

    try{
      const rjon = JSON.parse(string)
      rjon.name = name
      return this.AppData.setSaveRjon(rjon)
    }catch(e){
      this.AppData.saveOffline(string)
    }
  }

  compareRjon(rjonString){
    //this.viewRjonMerge = !this.viewRjonMerge
    if(this.viewRjonMergeResults)return this.viewRjonMergeResults = false

    this.viewRjonMergeResults = true

    try{
      this.rjonMerge = JSON.parse(rjonString)
      this.compareResults = this.getRjonCompare(this.AppData.rjon, this.rjonMerge)
    }catch(e){
      this.rjonMerge = null
      this.compareResults = null
      this.mergeError = e
    }
  }

  mergeRjon(rjonString){
    try{
      const rjon = JSON.parse(rjonString)
      const save = this.getRjonMerge(this.AppData.rjon, rjon)
      this.AppData.setSaveRjon(this.AppData.rjon)
    }catch(e){
      console.log('e',e)
      this.mergeError = e
    }
  }

  dedup(){
    this.AppData.rjon.routes.forEach((route,i)=>{
      for(let x=this.AppData.rjon.routes.length-1; x >= 0; --x){
        if(this.AppData.rjon.routes[i] == this.AppData.rjon.routes[x]){
          continue
        }

        if(route.path == this.AppData.rjon.routes[x].path){
          this.AppData.rjon.routes.splice(x,1)
        }
      }
    })

    this.AppData.rjon.hosts.forEach((host,i)=>{
      for(let x=this.AppData.rjon.hosts.length-1; x >= 0; --x){
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

  getRjonCompare(rjon0, rjon1){
    const drop = {routes:[], hosts:[]}
    const add = {routes:[], hosts:[]}

    if(rjon1.routes && rjon0.routes){
      rjon1.routes.forEach(route=>{
        for(let x=rjon0.routes.length-1; x >= 0; --x){
          if(rjon0.routes[x].path==route.path && rjon0.routes[x].method==route.method){
            return
          }
        }
        add.routes.push(route)
      })

      rjon0.routes.forEach(route=>{
        for(let x=rjon0.routes.length-1; x >= 0; --x){
          if(rjon1.routes[x].path==route.path && rjon1.routes[x].method==route.method){
            return
          }
        }
        drop.routes.push(route)
      })
    }

    if(rjon1.hosts && rjon0.hosts){
      rjon1.hosts.forEach(host=>{
        for(let x=rjon0.hosts.length-1; x >= 0; --x){
          if(rjon0.hosts[x].hostname==host.hostname){
            return
          }
        }
        add.hosts.push(host)
      })
      
      rjon0.hosts.forEach(host=>{
        for(let x=rjon1.hosts.length-1; x >= 0; --x){
          if(rjon1.hosts[x].hostname==host.hostname){
            return
          }
        }
        drop.hosts.push(host)
      })
    }

    return { add, drop }
  }

  getRjonMerge(rjon0, rjon1){
    rjon1.routes.forEach(route=>{
      for(let x=rjon0.routes.length-1; x >= 0; --x){
        if(route.path==route.pathj){
          return Object.assign(rjon0.routes[x], route)
        }
      }
      rjon0.routes.push(route)
    })

    rjon1.hosts.forEach(host=>{
      for(let x=rjon0.hosts.length-1; x >= 0; --x){
        if(host.hostname==host.hostnamej){
          return Object.assign(rjon0.hosts[x], host)
        }
      }
      rjon0.hosts.push(host)
    })

    return rjon0
  }
}
