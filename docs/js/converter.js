// ここからコードを書いてください
export function setupConverter() {
  const converterForm = document.querySelector(".converter-form");
  const converterInput = document.querySelector(".converter-input");
  const converterFrom = document.querySelector(".converter-from");
  const converterTo = document.querySelector(".converter-to");
  const converterResult = document.querySelector(".converter-result");

  const lengthUnit = [
    { name: "meter", base: 1 },
    { name: "kilometer", base: 1000 },
    { name: "centimeter", base: 0.01 },
    { name: "millimeter", base: 0.001 },
    { name: "inch", base: 0.0254 },
    { name: "foot", base: 0.3048 },
    { name: "yard", base: 0.9144 },
    { name: "mile", base: 1609.344 },
  ];
  // -----------------------------------------------------------------
  // ▼ここからが続きのコードです▼
  // -----------------------------------------------------------------

  // --- 【変換元】のリスト (converterFrom) に選択肢を追加 ---
  lengthUnit.forEach((unit) => {
    // 1. <option>要素をメモリ上に作成
    const option = document.createElement("option");

    // 2. value に unit.base を設定
    option.value = unit.base;

    // 3. 表示テキストに unit.name を設定
    option.textContent = unit.name;

    // 4. <select>要素 (converterFrom) に作った <option> を追加
    converterFrom.appendChild(option);
  });

  // --- 【変換先】のリスト (converterTo) に選択肢を追加 ---
  lengthUnit.forEach((unit) => {
    // 1. <option>要素をメモリ上に作成
    const option = document.createElement("option");

    // 2. value に unit.base を設定
    option.value = unit.base;

    // 3. 表示テキストに unit.name を設定
    option.textContent = unit.name;

    // 4. <select>要素 (converterTo) に作った <option> を追加
    converterTo.appendChild(option);
  });

  // --- 初期値の設定 (selectedIndex を使用) ---
  // lengthUnit 配列の 0番目="meter", 1番目="kilometer" と仮定

  // 変換元の初期値を 0番目 ("meter") に設定
  converterFrom.selectedIndex = 0;

  // 変換先の初期値を 1番目 ("kilometer") に設定
  converterTo.selectedIndex = 1;

  function convertUnits() {
    // 1. 入力値を取得し、数値(小数点)に変換
    const inputValue = parseFloat(converterInput.value);

    // 2. 値が数値かを確認 (バリデーション)
    if (isNaN(inputValue)) {
      // 数値でない場合 (NaN の場合)
      converterResult.textContent = "Please enter a valid number";
      return; // 処理を終了
    }

    // 3. 変換元の単位(base)と名前を取得
    // (select.value は文字列なので parseFloat で数値に変換)
    const fromBase = parseFloat(converterFrom.value);
    const fromName = lengthUnit[converterFrom.selectedIndex].name;

    // 4. 変換先の単位(base)と名前を取得
    const toBase = parseFloat(converterTo.value);
    const toName = lengthUnit[converterTo.selectedIndex].name;

    // 5. 変換後の値を計算
    // （入力値 * 変換元の単位）/ (変換先の単位)
    const resultValue = (inputValue * fromBase) / toBase;

    // 6. 変換結果を指定された形式で表示
    // toFixed(3) で小数点以下3桁に変換
    converterResult.textContent = `${inputValue} ${fromName} = ${resultValue.toFixed(
      3
    )} ${toName}`;
  }

  // --- イベントリスナーを設定 ---
  // 入力値、変換元、変換先のいずれかが変更されたら convertUnits 関数を実行
  converterInput.addEventListener("input", convertUnits);
  converterFrom.addEventListener("change", convertUnits);
  converterTo.addEventListener("change", convertUnits);

  // --- 初期読み込み時に一度、変換を実行 ---
  // (初期値 1000 meter = 1.000 kilometer を表示するため)
  convertUnits();
} // setupConverter 関数の終わり
