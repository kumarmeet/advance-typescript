enum DIRECTIOIN {
  up,
  down,
  left,
  right,
}

enum ROLES {
  admin = "admin",
  superadmin = "superadmin",
  customer = "customer",
}

console.log(DIRECTIOIN);
console.log(ROLES);

//computed enums

enum ACCESS_PERMISSION {
  READ = 4,
  WRITE = 2,
  EXECUTE = 1,
  READ_WRITE = READ + WRITE,
  WRITE_EXECUTE = WRITE + EXECUTE,
  READ_EXECUTE = READ + EXECUTE,
  READ_WRITE_EXECUTE = READ + WRITE + EXECUTE,
}

console.log(ACCESS_PERMISSION);
