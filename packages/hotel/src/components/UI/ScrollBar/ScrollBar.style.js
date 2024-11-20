import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 80px;
  background-color: #ffffff;
  overflow-y: hidden;

  @media (max-width: 1200px) {
    height: 64px;
  }

  > div {
    padding-left: 0;
    padding-right: 0;
  }

  .scrollbar_left {
    display: flex;
    height: 100%;
  }

  .linkItem {
    padding: 1rem;
  }

  .scrollbar_right {
    flex-shrink: 0;
  }
`;

export const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
  height: 110px;
  padding-bottom: 30px;
  margin-bottom: -30px;

  @media (max-width: 1200px) {
    height: 84px;
    padding-bottom: 20px;
    margin-bottom: -20px;
  }

  @media (max-width: 603px) {
    height: 98px;
  }
`;
