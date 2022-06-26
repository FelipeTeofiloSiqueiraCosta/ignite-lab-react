import {CheckCircle} from 'phosphor-react'
import { isPast, format } from 'date-fns' //isPast verifica se uma data ja passou(esta no passado)
import ptBR from 'date-fns/locale/pt-BR'
import { Link, useParams } from 'react-router-dom';
interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}


export function Lesson(props: LessonProps){
    const {slug} = useParams<{slug: string}>();

    const isLessonAvailable = isPast(props.availableAt);
    const availableDateFormatted = format(props.availableAt, "EEEE' - 'd 'de' MMMM ' - ' k'h'mm ",{
        locale: ptBR
    });

    const isActive = slug == props.slug;

    return (
        <Link to={`/event/lesson/${props.slug}`} className="mt-5 group">
            <span className="text-gray-300">
                {availableDateFormatted}
            </span>
            <div 
            className={`rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors 
            ${isActive ? 'bg-green-500' : ''}`} 
            >

                <header className="flex items-center justify-between">

                    {
                        isLessonAvailable ? 
                        (
                            <span className={`text-sm text-blue-500 font-medium flex items-center gap-2
                            ${isActive ? 'text-gray-100' : ''}`}>
                                <CheckCircle size={20} /> Conteúdo Liberado
                            </span>
                        ) : 
                        (
                            <span className={`text-sm text-blue-500 font-medium flex items-center gap-2`}>
                                <CheckCircle size={20} /> Em Breve
                            </span>
                        )
                    }

                    <span className="text-xs rounded py-[0.125rem] px-2 
                    text-white border border-green-300 font-bold">
                        {
                            props.type=='live' ? 'AO VIVO' : "AULA PRÁTICA" 
                        }
                    </span>
                </header>

                <strong className={`text-gray-200 mt-5 block
                ${isActive ? 'text-gray-50': ''}`}>
                    {props.title}
                </strong>
            </div>
        </Link>
    )
}