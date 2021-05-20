import styled from 'styled-components';

export const Respositorie = styled.div`
		width: auto;
		height: 150px;				
	//	border: 1px solid;
		margin: 40px 0px 10px 0px;

		ul{
			display: inline-block;
			margin: 5px 0px 10px 0px;
			padding: 0;
			list-style: none;		

			display: flex;	

			li{					
				display: inline-block;
				width: 300px;
				height: 135px;				        	
				background-color: white;		
				border-radius: 15px;	

				&+li{
					margin-left: 10px;
				}

				padding-top: 10px;
				
				strong{
					margin-left: 10px;
					//border: 1px solid;														
				}			

				p{		
					margin-left: 10px;
					margin-top: 30px;								
				}

				span{
					margin-left: 10px;	
					//border: 1px solid;				
				}				
			}			
		
		}


`;