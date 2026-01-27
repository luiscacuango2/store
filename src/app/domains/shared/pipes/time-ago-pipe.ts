import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';

@Pipe({
  name: 'timeAgo',
  standalone: true
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: string | number | Date): string {
    if (!value) return '';

    const date = new Date(value);
    
    // formatDistanceToNow calcula la diferencia y añade el sufijo
    return formatDistanceToNow(date, { 
      addSuffix: true, // Esto añade el "hace" o "en"
      locale: es      // Configura el idioma a español
    });
  }
}
