import { useState } from 'react';
import { QucationIcon, StarIcon } from '../assets/icons';
import { CustomerProps, CUSTOMERS_MOCK_DATA } from '../utils/mockDatas';

const Customers = () => {
  const [customers, setCustomers] = useState(CUSTOMERS_MOCK_DATA);

  const handleSortCustomers = (index: number) => {
    const [selectedOne] = customers.splice(index, 1);
    setCustomers([selectedOne, ...customers]);
  };

  return (
    <div className="flex flex-wrap justify-between">
      <div className="px-8 md:px-0 md:w-5/12 w-full flex justify-center">
        <div className="stack">
          {customers.map((customer, index) => {
            return (
              <img
                src={customer.img}
                key={`customer_${customer.id}`}
                className="transition-all hover:-translate-y-4 cursor-pointer h-auto"
                onClick={() => handleSortCustomers(index)}
                style={{
                  transform: `rotate(${index * 5}deg) translateX(${index * 20}px)`,
                }}
                alt="Customer 0 Image"
              />
            );
          })}
        </div>
      </div>
      <div className="md:w-7/12 w-full flex flex-col relative gap-6">
        <QucationIcon />
        <p className="text-3xl">{customers[0].message}</p>
        <div className="flex justify-between">
          <div className="flex">
            {[...Array<CustomerProps>(customers[0].score)].map((_, index) => (
              <StarIcon key={index} className="w-8" />
            ))}
          </div>
          <p className="text-2xl text-gray-600">۱۴۰۳/۰۴/۰۶</p>
        </div>
      </div>
    </div>
  );
};

export default Customers;
