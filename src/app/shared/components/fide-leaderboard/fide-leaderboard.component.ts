import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface TableElement {
  name: string;
  position: number;
  rating: number;
  year: number;
  country: string;
}

const ELEMENT_DATA: TableElement[] = [
  { position: 1,	 name: 'Carlsen, Magnus', country: 'NOR', rating: 2845, year: 1990 },
  { position: 2,	 name: 'Caruana, Fabiano	', country: 'USA', rating: 2819, year: 1992 },
  { position: 3,	 name: 'Ding, Liren', country: 'CHN', rating: 2809, year: 1992 },
  { position: 4,	 name: 'Giri, Anish', country: 'NED', rating: 2797, year: 1994 },
  { position: 5,	 name: 'Mamedyarov, Shakhriyar', country: 'AZE', rating: 2793, year: 1985 },
  { position: 6,	 name: 'Anand, Viswanathan', country: 'IND', rating: 2774, year: 1969 },
  { position: 7,	 name: 'Nepomniachtchi, Ian', country: 'RUS', rating: 2773, year: 1990 },
  { position: 8,	 name: 'Vachier-Lagrave, Maxime', country: 'FRA', rating: 2773, year: 1990 },
  { position: 9,	 name: 'Grischuk, Alexander', country: 'RUS', rating: 2771, year: 1983 },
  { position: 10,	 name: 'Aronian, Levon', country: 'ARM', rating: 2763, year: 1982 },
];

@Component({
  selector: 'app-fide-leaderboard',
  templateUrl: './fide-leaderboard.component.html',
  styleUrls: ['./fide-leaderboard.component.css']
})
export class FideLeaderboardComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'country', 'rating', 'year'];
  dataSource = new MatTableDataSource<TableElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }
}
