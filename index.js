function superbowlWin(record) {
    const findWin = record.find(team => team.result === 'W');
  if (findWin)
  return findWin.year;

}
