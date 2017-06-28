import { Pipe, EventEmitter, Input, Output, Component } from '@angular/core'
import { TestRoute } from "./TestRoute.component"
import { EditRoute } from "./EditRoute.component"
import { EditHost } from "./EditHost.component"
import { RjonMarkdown } from "./RjonMarkdown.component"
import { RjonHeaderEditor } from "./RjonHeaderEditor.component"
import { RjonNotesEditor } from "./RjonNotesEditor.component"

import * as nodedump from 'nodedump'
@Pipe({name: 'dump'}) export class Dump {
  transform(input, options={}) {
    //return nodedump(input, options)
    return nodedump.dump(input, Object.assign({hideTypes:['Function']}, options))
  }
}
import { RjonLinks } from "./RjonLinks.component"
import { TableOfHosts } from "./TableOfHosts.component"
import { TableOfRoutes } from "./TableOfRoutes.component"
import { IconTable } from "./IconTable.component"

export const declarations=[
  TableOfRoutes,
  IconTable,
  EditRoute,
  EditHost,
  TestRoute,
  RjonMarkdown,
  RjonHeaderEditor,
  RjonNotesEditor,
  TableOfHosts,
  Dump,
  RjonLinks
]