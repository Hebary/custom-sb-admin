import { Supplier } from "../../interfaces";
import { sbApi } from '../../../api';


export const getSuppliers = async(): Promise<Supplier[]> => {
    const { data } = await sbApi.get<Supplier[]>('/suppliers');
    return data as Supplier[];
}

export const removeSupplier = async (id: string): Promise<boolean> => {
    const {data} = await sbApi.delete(`/suppliers/${id}`);
    console.log(data)
    return true;
}

export const saveSupplier = async (supplier: Supplier) => {
    const {data} = await sbApi.post('/suppliers', supplier);
    console.log(data);
}

export const searchSupplierById = async(id: string): Promise<Supplier> =>  {
    const { data } = await sbApi.get(`/suppliers/${id}`);
    return data as Supplier;
}