import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';

import { FileDocumentsComponent } from './file-documents/file-documents.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { FileMediaComponent } from './file-media/file-media.component';
import { FileImagesComponent } from './file-images/file-images.component';
import { RouterModule, Routes } from '@angular/router';

export const fileManagerRoutes: Routes = [
	{ path: '', redirectTo: 'file-documents', pathMatch: 'full' },
	{ path: 'file-documents', component: FileDocumentsComponent, data: { title: ':: Lucid Angular :: File Manager :: Documents ::' } },
	{ path: 'file-media', component: FileMediaComponent, data: { title: ':: Lucid Angular :: File Manager :: Media ::' } },
	{ path: 'file-images', component: FileImagesComponent, data: { title: ':: Lucid Angular :: File Manager :: Images ::' } }
                
]
@NgModule({
	declarations: [FileDocumentsComponent, FileManagerComponent, FileMediaComponent, FileImagesComponent],
	imports: [
		CommonModule,
		NgxEchartsModule,
		RouterModule.forChild(fileManagerRoutes)
	]
})
export class FileManagerModule { }
