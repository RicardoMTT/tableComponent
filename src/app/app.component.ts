import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CourseService } from './course.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public ngxControl = new FormControl();

  public itemsTest = [
    {
      id: 1,
      name: 'Ricardo',
      lastName:'Tovar'
    },
    {
      id: 2,
      name: 'Luis',
      lastName:'Galarza'
    }
  ]
  
  public items: string[] = ['Amsterdam', 'Antwerp', 'Athens', 'Barcelona',
  'Berlin', 'Birmingham', 'Bradford', 'Bremen', 'Brussels', 'Bucharest',
  'Budapest', 'Cologne', 'Copenhagen', 'Dortmund', 'Dresden', 'Dublin',
  'Düsseldorf', 'Essen', 'Frankfurt', 'Genoa', 'Glasgow', 'Gothenburg',
  'Hamburg', 'Hannover', 'Helsinki', 'Kraków', 'Leeds', 'Leipzig', 'Lisbon',
  'London', 'Madrid', 'Manchester', 'Marseille', 'Milan', 'Munich', 'Málaga',
  'Naples', 'Palermo', 'Paris', 'Poznań', 'Prague', 'Riga', 'Rome',
  'Rotterdam', 'Seville', 'Sheffield', 'Sofia', 'Stockholm', 'Stuttgart',
  'The Hague', 'Turin', 'Valencia', 'Vienna', 'Vilnius', 'Warsaw', 'Wrocław',
  'Zagreb', 'Zaragoza', 'Łódź'];

  title = 'table-component-angular';
  courses: any[] = [];
  searchForm!: FormGroup;
  isLoading: boolean = false;
  sortColumn: string = 'title';
  sortOrder: string = 'asc';
  @ViewChild('noButton', { static: true }) miElementoRef!: ElementRef;

  constructor(
    private courseService: CourseService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe(
      (courses: any) => {
        console.log('courses', courses);

        this.courses = courses;
      },
      (error) => {
        console.log('error', error);
      }
    );
    this.searchForm = this.formBuilder.group({
      searchText: [''],
    });
  }

  sortBy(column: string) {
    if (column === this.sortColumn) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortOrder = 'asc';
    }
  }

  moveNo(): void {
    console.log('aa');

    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    const noButton = this.miElementoRef.nativeElement;
    if (noButton) {
      console.log('aer', noButton.style);
      console.log('x', x);
      noButton.id = 'noButton';
      noButton.style.left = x + 'px';
      noButton.style.top = y + 'px';
      console.log('aer', noButton.style);
    }
  }
}
