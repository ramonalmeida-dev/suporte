import { getDataUtils } from './api/getData';
import DefaultLayout from '../components/Layout';


const utils = ({ utilsdownload = [] }) => {

  return(
    <DefaultLayout>
    <div className="overflow-x-auto">
        <div className="min-w-screen bg-gray-100 flex items-center justify-center font-sans overflow-hidde">
            <div className="w-full lg:w-5/6">
                <div className="bg-white shadow-md rounded my-6">
                
                    <table className="min-w-max w-full table-auto" >
                        <thead>
                            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                <th className="py-3 px-6 text-left">Nome</th>
                                <th className="py-3 px-3 text-left">Versão</th>
                                <th className="py-3 px-6 text-center">Autor</th>
                                <th className="py-3 px-6 text-center">Categoria</th>
                                <th className="py-3 px-6 text-center">Ação</th>
                            </tr>
                        </thead>
                        {utilsdownload.map((utils, index) => (
                        <tbody className="text-gray-600 text-sm font-light" key={index}>
                            <tr className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6 text-left whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="mr-2">
                                        <img src={utils.data.imagem.url} className="w-10 h-10"/>
                                        </div>
                                        <span className="font-medium">{utils.data.titulo[0].text}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center">                                       
                                        <span >{utils.data.versao[0].text}</span>
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex items-center justify-center">
                                    {utils.data.autor}
                                    </div>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <span className="bg-purple-200 text-blue-600 py-1 px-3 rounded-full text-xs">{utils.data.categoria}</span>
                                </td>
                                <td className="py-3 px-6 text-center">
                                    <div className="flex item-center justify-center">
                                        
                                        <a  className="flex-no-shrink bg-blue-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-blue-500 text-white rounded-full" href={utils.data.link.url}>Download</a>
                                        
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        ))}
                    </table>
                     
                </div>
                
            </div>
        </div>
    </div>
   
  </DefaultLayout>
  )
}
  


utils.getInitialProps = async () => {
  // Here we call the API and request 5 documents
  const response = await getDataUtils({ pageSize: 10});
  return {
    utilsdownload: response.results
  };
};

export default utils;