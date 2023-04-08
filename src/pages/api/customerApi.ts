import { Customer } from "../../interfaces";
import { sbApi } from '../../../api';


export const getCustomers = async(): Promise<Customer[]> => {
    const { data } = await sbApi.get<Customer[]>('/customers');
    return data as Customer[];
}

export const removeCustomer = async (id: string): Promise<boolean> => {
    const { data } = await sbApi.delete(`/customers/${id}`);
    console.log(data)
    return true;
}

export const saveCustomer = async (customer: Customer) => {
    const { data } = await sbApi.post('/customers', customer);
    console.log(data);
}

export const getCustomerById = async(id: string): Promise<Customer> =>  {
    const { data } = await sbApi.get(`/customers/${id}`);
    return data as Customer;
}