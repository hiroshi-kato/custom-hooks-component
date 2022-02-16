import { useState } from 'react';
import { Checks } from './components/Checks';
import { useChecks } from './hooks/useChecks';

function App() {
  // カスタムフック化
  const [isAllChecked, AlphabetChecks] = useChecks(['a', 'b', 'c']);

  // カスタムフック化しない場合
  // Checks用コードStart
  const labels = ['d', 'e', 'f'];
  const [checkList, setCheckList] = useState(labels.map(() => false));
  const handleCheckClick = (index: number) => {
    setCheckList((checks) => checks.map((c, i) => (i === index ? !c : c)));
  };
  const isAllChecked2 = checkList.every((x) => x);
  // Checks用コード End

  return (
    <div>
      <p>好きなアルファベットをチェックしてください。</p>
      <AlphabetChecks />
      <button disabled={!isAllChecked}>次へ</button>
      <Checks
        checkList={checkList}
        labels={labels}
        onCheck={handleCheckClick}
      />
      <button disabled={!isAllChecked2}>次へ2</button>
    </div>
  );
}

export default App;
