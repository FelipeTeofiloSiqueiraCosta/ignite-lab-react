import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar(){

    const {data} = useGetLessonsQuery();

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
            <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
                Cronograma de Aulas
            </span>
            
            {
                data?.lessons.map((lesson)=>{
                    return(
                        <div className="flex flex-col gap-8" key={lesson.id}> {/* gap vai add espaçamento de 32px entre cada lesson */}
                            <Lesson title={lesson.title} 
                            slug={lesson.slug}
                            availableAt={new Date(lesson.availableAt)}
                            type={lesson.lessonType}/>
                        </div>
                    )
                })
            }

        </aside>
    )
}