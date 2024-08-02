type TFileData<T, U> = {
  name: T;
  path: T;
  key: T;
  fileInfo: {
    s3: U;
    size: number;
  };
};

interface IFileData<T, U> {
  name: T;
  path: T;
  key: T;
  fileInfo: {
    s3: U;
    size: number;
  };
}

const file: TFileData<string, boolean> = {
  name: "file1",
  path: "/build/hello.jpg",
  key: "4562",
  fileInfo: {
    s3: true,
    size: 1000,
  },
};

console.table(file);

// index signatures -> if we don't know the key of object

type JobRoles<T> = T | T | T;

type UserInfo = {
  id: string;
  readonly jobRole: JobRoles<"admin" | "superadmin" | "invalid">; // not can be changed
  date?: Date;
};

type User = {
  [key: string | number]: UserInfo;
};

type TTFileData<T, U, P> = {
  name: T;
  path: T;
  key: T;
  fileInfo: {
    s3: U;
    size: number;
  };
  user?: P; //optional property
};

const file2: TTFileData<string, boolean, User> = {
  name: "file1",
  path: "/build/hello.jpg",
  key: "4562",
  fileInfo: {
    s3: true,
    size: 1000,
  },
  user: {
    meet: {
      id: "tyg",
      jobRole: "admin",
    },
    unknown: {
      id: "invalid",
      jobRole: "invalid",
    },
  },
};

// if (file2.user) {
//   file2.user["meet"].jobRole = "admin";
// }

console.log(file2, file2.user && file2.user["meet"].jobRole);
