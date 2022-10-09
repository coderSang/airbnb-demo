import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  .info{
    display: flex;
    flex-direction: column;
    align-items: center;
    .MuiPaginationItem-page {
      margin: 0 9px;

      &:hover{
        text-decoration: underline;
      }
    }
    .MuiPaginationItem-icon{
      font-size: 24px;
    }
    .MuiPaginationItem-page.Mui-selected{
      background: #222;
      color: #fff;
    }
    .desc{
      margin-top: 16px;
      color: #222
    }
  }
`