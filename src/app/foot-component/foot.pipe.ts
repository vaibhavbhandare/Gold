import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'footpipe'
})

export class FoorPipeComponent implements PipeTransform {

    transform(value: any, search: any): any {
        if (!search) return value
        return value.filter(function (data) {
           
            let allkeys = Object.keys(data)
            console.log(allkeys);
            // allkeys.forEach(element=>{
            //     console.log(data[element]);
                
            //     return data[element].toString().toLowerCase().includes(search.toString().toLowerCase())
            // })
            
            
            return data.name.toString().toLowerCase().includes(search.toString().toLowerCase())

        })
    }

}