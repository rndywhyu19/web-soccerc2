import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE:Schedule[] = [
   
    {id:1,playingDate:new Date(2021,8,10),HomeTeam: 'Manchester United',
    AwayTeam:'Newcastil',HomeScore:5,AwayScore:0,
    RefName:'Budi',notes:'Pertandingan Overtime'},
    {id:2,playingDate:new Date(2021,8,11),HomeTeam: 'Chelsea',
    AwayTeam:'Juventus',HomeScore:3,AwayScore:2,
    RefName:'Carlo',notes:'Pertandingan ngelek'},
    {id:3,playingDate:new Date(2021,8,13),HomeTeam: 'Manchester United',
    AwayTeam:'Atletico Madrid',HomeScore:2,AwayScore:1,
    RefName:'Parto',notes:'Pertandingan ada kerusuhan'},
    {id:4,playingDate:new Date(2021,8,14),HomeTeam: 'Barcelona',
    AwayTeam:'Valencia',HomeScore:2,AwayScore:4,
    RefName:'Parto',notes:'Pertandingan 2 kartu merah'},
    {id:5,playingDate:new Date(2021,8,15),HomeTeam: 'Valencia',
    AwayTeam:'Arsenal',HomeScore:2,AwayScore:3,
    RefName:'Parno',notes:'Pertandingan aman'},
]

export const TEAMS:Team [] = [
    {id:1,name:'Barclona',type:'Over 30'},
    {id:2,name:'Real Madrid',type:'Over 30'},
    {id:3,name:'Atletico Madrid',type:'Over 30'},
    {id:4,name:'Valencia',type:'Over 30'},
    {id:5,name:'Manchester United',type:'Over 30'},
    {id:6,name:'Arsenal',type:'Over 30'},
    {id:7,name:'Chelsea',type:'Over 30'},
    {id:8,name:'Juventus',type:'Over 30'},
]