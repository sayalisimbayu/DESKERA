import { NgModuleFactory, Type } from '@angular/core';

export const lazyWidgets: { path: string, loadChildren: () => Promise<NgModuleFactory<any> | Type<any>>, data: any }[] = [
  {
    path: 'page-header-chart',
    loadChildren: () => import('./../layout/page-title/general-component/gc.module').then(m => m.GCModule),
    data: { preload: true }
  },
  {
    path: 'page-title',
    loadChildren: () => import('./../layout/page-title/page-title.module').then(m => m.PageTitleModule),
    data: { preload: true }
  },
  {
    path: 'page-frame',
    loadChildren: () => import('./../layout/page-frame/page-frame.module').then(m => m.PageFrameModule),
    data: { preload: true }
  },
];

export function lazyArrayToObj() {
  const result = {};
  for (const w of lazyWidgets) {
    result[w.path] = w.loadChildren;
  }
  return result;
}
