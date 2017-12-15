import { Input, Component } from '@angular/core'
import { string } from "./templates/rjon-links.pug"
import * as rjonHelper from "./rjonHelper"

@Component({
  selector:'rjon-links',
  template:string
}) export class RjonLinks {
  @Input() rjon = {name:null}

  getEmailString(){
    return 'mailto:?subject=rjon '+this.rjon.name+'&body='+encodeURIComponent(this.getDownloadString())
  }

  getMarkdownString(){
    return rjonHelper.rjonToMarkdown(this.rjon)
  }

  getDownloadString(){
    return JSON.stringify(this.rjon, null, 2)//this.AppData.rjonString
  }

  /*getDownloadHtml(){
    let string = '<!DOCTYPE html><html lang="en"><body>'+this.markdownCss + this.innerHtmlModel+'</body></html>'
    return string.replace(/replaceref/g,'href')
  }

  fetchMarkdownCss(){
    this.AckApi.request({url:'markdown.css'})
    .then(markdownCss=>this.markdownCss='<style>'+markdownCss+'</style>')
  }*/
}
