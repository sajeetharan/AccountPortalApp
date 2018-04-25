import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/auth-guard.service';
import { LoginComponent } from './components/login.component/login.component';
import { AccountDetailsComponent } from './components/account-details.component/account-details.component';
import { DashboardComponent } from './components/dashboard.component/dashboard.component';
import { UploadComponent } from './components/upload.component/upload.component';
import { PageNotFoundComponent } from './components/page-not-found.component/page-not-found.component';
import { UserNotAuthorizedComponent } from './components/user-not-authorized/user-not-authorized.component';
const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent

    },
    {
        path: 'accounts',
        component: AccountDetailsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'upload',
        component: UploadComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'unauthorized',
        component: UserNotAuthorizedComponent,
        canActivate: [AuthGuard]
    },
    { path: '**', component: PageNotFoundComponent }

];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
$http.get(‘’)
    .success(function (data, status) {
        $scope.records = data;
        var temp = $scope.records.filter(function (item) {
            if (item.type !== “xyzzy”)
        return;
      else
        $scope.excluded.push(item);
    });
$scope.records = temp;
}) 