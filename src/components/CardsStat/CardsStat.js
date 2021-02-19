/** @module CardsStat
 *  @since 2021.02.19, 00:58
 *  @changed 2021.02.19, 00:58
 */

const stat = {
  correctAnswers: 0,
};

export function resetStat() {
  stat.correctAnswers = 0;
}

export function getCorrectAnswersCount() {
  return stat.correctAnswers;
}

export function accountCorrectAnswer() {
  stat.correctAnswers++;
}
