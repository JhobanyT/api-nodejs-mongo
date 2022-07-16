import Role from "../models/Role";
import User from "../models/User";


export const createRoles = async () => {
    try {
      // Count Documents
      const count = await Role.estimatedDocumentCount();
  
      // check for existing roles
      if (count > 0) return;
  
      // Create default Roles
      const values = await Promise.all([
        new Role({ name: "user" }).save(),
        new Role({ name: "estudiante" }).save(),
        new Role({ name: "secretaria" }).save(),
        new Role({ name: "evaluador" }).save(),
        new Role({ name: "coordinador" }).save(),
        new Role({ name: "admin" }).save(),
      ]);
  
      console.log(values);
    } catch (error) {
      console.error(error);
    }
  };