import { media, transitions } from "lib/style-utils";
import Memo from "./Memo";

const { default: styled } = require("styled-components");

const Wrapper = styled.div`
  column-count: 3;

  column-gap: 1rem;
  column-fill: auto;

  margin-top: 2rem;
  font-size: 0px; /* inline-block 위아래 사이에 생기는 여백을 제거합니다 */

  ${media.mobile`
    margin-top: 0.25rem;
  `}

  .memo-enter {
    animation: ${transitions.stretchOut} 0.3s ease-in;
    animation-fill-mode: forwards;
  }

  .memo-leave {
    animation: ${transitions.shrinkIn} 0.15s ease-in;
    animation-fill-mode: forwards;
  }
`;

const MemoList = ({ memos, onOpen }) => {
  const memoList = memos.map((memo) => (
    <Memo key={memo.id} memo={memo} onOpen={onOpen} />
  ));
  return <Wrapper>{memoList}</Wrapper>;
};

export default MemoList;
