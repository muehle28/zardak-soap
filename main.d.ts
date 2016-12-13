declare module "meteor/alanning:roles" {
    import { ObservableCursor } from 'meteor-rxjs';
    module Roles {
      function createRole(roleName: string): string;
      function deleteRole(roleName: string): void;
      function addUsersToRoles(users: any, roles: any, groups?: string): void;
      function removeUsersFromRoles(users: any, roles: any): void;
       // User can be user ID or user object.
      function userIsInRole(user: any, roles: any): boolean;
      function getRolesForUser(userId: string): string[];
      function getAllRoles(): ObservableCursor<RolesDAO>;
      function getUsersInRole(roleName: string): ObservableCursor<RolesDAO>;
      var GLOBAL_GROUP: string;
    }

    interface RolesDAO {
      _id?: string;
      name?: string;
    }
}
