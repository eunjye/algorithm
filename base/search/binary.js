/**
 * binarySearch
 * @param {number[]} arr   정렬(오름차순)된 배열
 * @param {number}   target 찾고 싶은 값
 * @returns {number}        존재하면 인덱스, 없으면 -1
 */
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // 가운데 인덱스 (오버플로 방지용 패턴: left + ((right - left) >> 1))
    const mid = left + ((right - left) >> 1);

    if (arr[mid] === target) {
      return mid;            // 찾았다!
    } else if (arr[mid] < target) {
      left = mid + 1;        // 오른쪽 반 구간으로 이동
    } else {
      right = mid - 1;       // 왼쪽 반 구간으로 이동
    }
  }
  return -1;                 // 못 찾은 경우
}