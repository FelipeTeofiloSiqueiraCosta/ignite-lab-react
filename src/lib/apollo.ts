import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: import.meta.env.VITE_API_URL, //url api graphcms (em js é proccess.env)
    headers: {
        // geralmente vc nao disponibiliza seu toker assim:
        // se vc for postar no git, entao agente cria variaveis de ambiente
        // e define la o valor, cria um arqruivo .env
        //'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYxOTg5NjYsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG96ZnMyYTFneTQwMXo0Zmc0bmRxdnovbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNDU3Y2YxZDQtNjA0YS00NDM4LTkwOTAtODhiMzJiZmEzYWYzIiwianRpIjoiY2w0dWkzcGE2MHdncTAxdW5kc3ZsY3YxcCJ9.QiWIP8_V00McFFYcU8nSoTRUwlXgAWdzwXEwBvYVwZe8p3o4ahemR-rPf07ycZ9PIQzWRkzTk9n2gW6hrX8y--iDs_VvKjUDHsOkmKm3Q2W_EY_hEd2yEJZ5cDcWJIu46mCBOfydVMxFP9Unxf2nSrRpI-iB5oh-t7liK6i0Dsp_kGSdGCrun2ko5Q97w1U9Xas_buICMOiKpndnI3PuzuXSpX4ELBvfRUZlSEPk_DCh_AT35LC8hxwF0YNqPVEcmy3lrWHvR7TIujBu_n6_Xphg_cXMIZBLr1h9pysuQRaa5iI3nEI1Dfj4kuOAkd6oj0LZj7deK_NCUWdxk7jO0iIokovkhKP58EUmSy36q7YzvtMRS-G5vnKfcYSGHK7thhnnwRK9EgYtSXQ13SLKltMm_5CATxBO7Sfy1JISfiSFf8fgKVfTQsQOLkg3mcgDkCRn_qFAqfjPaIE0p0lIaaGEHFcEtMTlfbRFXyx5kCYmKAAFS5Qj_Ej7WVbCU2pEy0uDHOzKHfEUpizYNM-des6fZvus0iLcCJnDmdrXIPkMMs9uN3-rUDjKw2g29kVDtqwogZzTeXecP8pgKEZgvFQgbH85XNw_mbDFL7AsXRljBYBog0SdPCMKhZQ4i7RMdxuNue8jGlUnjgWsfKhypL7pR7-hUX5vTfGulOVdWUw'
        'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKE}`
    
    },
    cache: new InMemoryCache()
})