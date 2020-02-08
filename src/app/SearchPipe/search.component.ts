import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"filter"
})

export class SearchPipeComponent implements PipeTransform
{

    transform(value:any,search:any)
    {
      if(!search) return value

      return value.filter(function (info){
          return info.name.toString().toLowerCase().includes(search.toString().toLowerCase()) 
          || info.email.toString().toLowerCase().includes(search.toString().toLowerCase())
          || info.age.toString().toLowerCase().includes(search.toString().toLowerCase())
          || info.gender.toString().toLowerCase().includes(search.toString().toLowerCase())
          || info.id.toString().toLowerCase().includes(search.toString().toLowerCase())    // not filter by id
      })

    }
}