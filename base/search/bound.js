/**
 * lowerBound  : target 이상(≥)이 처음 등장하는 인덱스
 * upperBound  : target 초과(>)가 처음 등장하는 인덱스
 *   └─ 둘 다 없으면 arr.length를 돌려줌
 *
 * 전제: arr 는 ‘숫자 기준’ 오름차순 정렬되어 있어야 함
 *        arr.sort((a, b) => a - b);
 */
function lowerBound(arr, target) {
  let l = 0;
  let r = arr.length;   // [l, r)  : 오른쪽은 열려 있음

  while (l < r) {
    const m = l + ((r - l) >> 1);   // 가운데 인덱스, 오버플로 방지 패턴
    if (arr[m] < target) {
      l = m + 1;               // target 보다 작은 구간은 버림
    } else {
      r = m;                   // target 이상이므로 왼쪽도 가능
    }
  }
  return l;                    // 또는 r (둘이 같아짐)
}

function upperBound(arr, target) {
  let l = 0;
  let r = arr.length;          // [l, r)

  while (l < r) {
    const m = l + ((r - l) >> 1);
    if (arr[m] <= target) {
      l = m + 1;               // target 까지는 버림
    } else {
      r = m;                   // target 초과부터는 후보
    }
  }
  return l;
}

function exists(arr, target) {
  // 값 존재 유무 확인
  const idx = lowerBound(arr, target);
  return idx < arr.length && arr[idx] === target;
}

function count(arr, target) {
  // 개수 확인
  const lo = lowerBound(arr, target);
  const hi = upperBound(arr, target);
  return hi - lo;          // 등장 횟수
}


const arr = [1, 2, 3, 4, 5];
const target = 3;
if (count(arr, target) > 0) {
  console.log('target exists');
} else {
  console.log('target does not exist');
}
