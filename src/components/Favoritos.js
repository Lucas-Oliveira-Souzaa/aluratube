import styled from "styled-components";

export const StyledFavoritos = styled.div`
    .user-info{
        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin-bottom: 50px;
       
    }            
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%; 
        margin-left: 30px;                         
    }
    h2{
        font-size: 16px;
        margin-bottom: 16px;
        margin-left: 10px;
    }
    a {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;         
  }  
  .nameInfo{
    display: flex;
    align-items: center ;       
  }
`;