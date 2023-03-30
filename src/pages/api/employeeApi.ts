import { Employee } from "../../interfaces";
import { sbApi } from '../../../api';


export const getEmployees = async(): Promise<Employee[]> => {
    const { data } = await sbApi.get<Employee[]>('/employees');
    return data as Employee[];
}

export const removeEmployee = async (id: string): Promise<boolean> => {
    const {data} = await sbApi.delete(`/employees/${id}`);
    console.log(data)
    return true;
}

export const saveEmployee = async (employee: Employee) => {
    const {data} = await sbApi.post('/employees', employee);
    console.log(data);
}

export const searchEmployeeById = async(id: string): Promise<Employee> =>  {
    const { data } = await sbApi.get(`/employees/${id}`);
    return data as Employee;
}