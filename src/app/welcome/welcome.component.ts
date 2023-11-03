import { Component,OnInit,ViewChild,ElementRef } from '@angular/core';
import { QuestionService } from '../service/question.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit{
   public questionList:any=[];
  @ViewChild('name') namekey!:ElementRef;
  constructor(private questionService:QuestionService)
  {

  }
 
  ngOnInit(): void
   {
      this.getAllQuestions();
    
   }
  startQuiz()
   {
      localStorage.setItem("name",this.namekey.nativeElement.value)
   }
   getAllQuestions()
  {
    this.questionService.getQuestionJson().subscribe(res=>{this.questionList=res.questions;})
  }
  
}
