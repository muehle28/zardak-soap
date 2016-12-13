// Generated by typings
// Source: https://raw.githubusercontent.com/muehle28/alanning-roles/686928f10f5fc5518e6d145197b8136ed6b7cb1c/main.d.ts
declare module "meteor/alanning:roles" {
    import { ObservableCursor } from 'meteor-rxjs';
    module Roles {
      function createRole(roleName: string): string;
      function deleteRole(roleName: string): void;
      function addUsersToRoles(users: any, roles: any, groups?: string): void;
      function removeUsersFromRoles(users: any, roles: any): void;
       // User can be user ID or user object.
      function userIsInRole(user: any, roles: any, group?: any): boolean;
      function getRolesForUser(userId: string): string[];
      function getAllRoles(): ObservableCursor<RolesDAO>;
      function getUsersInRole(roleName: string): ObservableCursor<RolesDAO>;
      var GLOBAL_GROUP: string;
      var subscription: Meteor.SubscriptionHandle;
    }

    interface RolesDAO {
      _id?: string;
      name?: string;
    }
}
