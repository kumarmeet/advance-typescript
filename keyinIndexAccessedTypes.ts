type UserDetailsAPIResponse = {
  id: number;
  name: string;
  servicesList: {
    count: number;
    services: {
      id: number;
      name: string;
      price: number;
    }[];
  };
};

//keyin or index access types
type ServiceList = UserDetailsAPIResponse["servicesList"];

function fetchUserDetails(name: string): Promise<UserDetailsAPIResponse> {
  return new Promise((res, rej) => {
    if (name) {
      res({
        id: 23,
        name: "John",
        servicesList: {
          count: 2,
          services: [
            {
              id: 1,
              name: "Accounting",
              price: 49,
            },
            {
              id: 2,
              name: "Design",
              price: 19,
            },
          ],
        },
      });
    } else rej(new Error("Pass new a valid name"));
  });
}

function printServiceList(services: ServiceList): void {
  console.log(services);
}

fetchUserDetails("John")
  .then((res) => {
    console.log(res);
    printServiceList(res.servicesList);
  })
  .catch((err) => console.log(err));
