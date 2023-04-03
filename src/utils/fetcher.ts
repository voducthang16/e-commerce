import axios from 'axios'

const fetcher = <Type>(url: string) => axios.get<Type>(url).then(res => res.data);

export default fetcher;