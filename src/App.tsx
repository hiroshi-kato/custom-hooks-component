import { useChecks } from './hooks/useChecks'

function App() {
  const [isAllChecked, AlphabetChecks] = useChecks(['a', 'b', 'c'])

  return (
    <div>
      <p>好きなアルファベットをチェックしてください。</p>
      <AlphabetChecks />
      <button disabled={!isAllChecked}>次へ</button>
    </div>
  );
}

export default App
