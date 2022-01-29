import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'lugares',
    loadChildren: () =>
      import('./lugares/lugares.module').then((m) => m.LugaresPageModule),
  },
  {
    path: '',
    redirectTo: 'lugares',
    pathMatch: 'full',
  },
  {
    path: 'lugares',
    children: [
      {
        path: ':lugarId',
        loadChildren: () =>
          import('./detalle-lugar/detalle-lugar.module').then(
            (m) => m.DetalleLugarPageModule
          ),
      },
    ],
  },
  {
    path: 'add-lugar',
    loadChildren: () =>
      import('./add-lugar/add-lugar.module').then((m) => m.AddLugarPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
