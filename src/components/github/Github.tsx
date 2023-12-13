import '../github/Github.css'

const Github = () => {
  function getDateFromDayOfYear(dayOfYear: number) {
    const currentDate = new Date(new Date().getFullYear(), 0, 1);
    currentDate.setDate(dayOfYear);
    const dateString = currentDate.toLocaleDateString();

    return dateString;
  }
  function isLeapYear() {
    const currentYear = new Date().getFullYear();
    return (currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0);
  }

  let githubHash = new Map<String, Number>();
  let monthsXAxis: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


  let idx = 1;
  if (isLeapYear()) {
    while (idx <= 366) {
      let dateString = getDateFromDayOfYear(idx);
      githubHash.set(dateString, 0);
      idx = idx + 1
    }
  } else {
    while (idx <= 346) {
      // if (idx % 5) {
      //   let dateString = getDateFromDayOfYear(idx);
      //   githubHash.set(dateString, 0);
      // } else if (idx % 6) {
      //   let dateString = getDateFromDayOfYear(idx);
      //   githubHash.set(dateString, 2);
      // } else {
      //   let dateString = getDateFromDayOfYear(idx);
      //   githubHash.set(dateString, 4);
      // }
      let dateString = getDateFromDayOfYear(idx);
      githubHash.set(dateString, Math.floor(Math.random() * 5));
      idx = idx + 1
    }
  }

  while(idx <= 365) {
    let dateString = getDateFromDayOfYear(idx);
      githubHash.set(dateString, 0);
      idx = idx + 1
  }

  return (
    <>
      <div className='github-total-container'>
        <div className='scroll'>
          <p className="xaxis">
            {monthsXAxis.map((month) => (
              <span className="nowrap">{month}</span>
            ))}
          </p>
          <div className='github-container'>
            {Array.from(githubHash.entries()).map(([date, productiviyScore]) => (
            productiviyScore === 0 ? (
              <>
                <div className="column-4 github-scale-0" data-tooltip={`No productivity on ${date}`}>
                </div>
              </>
            ) : productiviyScore === 1 ? (
              <>
                <div className="column-4 github-scale-1" data-tooltip={`Minimal productivity on ${date}`}>
                </div>
              </>
            ) : productiviyScore === 2 ? (
              <>
                <div className="column-4 github-scale-2" data-tooltip={`Moderate productivity on ${date}`}>
                </div>
              </>
            ) : productiviyScore === 3 ? (
              <>
                <div className="column-4 github-scale-3" data-tooltip={`Significant productivity on ${date}`}>
                </div>
              </>
            ) : (
              <>
                <div className="column-4 github-scale-4" data-tooltip={`Substantial productivity on ${date}`}>
                </div>
              </>
            )
            ))}
          </div>
        </div>
        <div className='position-github-scale'>
            <p className='github-scale-text'>Less</p>
            <div className="column-4 github-scale-0"/>
            <div className="column-4 github-scale-1"/>
            <div className="column-4 github-scale-2"/>
            <div className="column-4 github-scale-3"/>
            <div className="column-4 github-scale-4"/>
            <p className='github-scale-text'>More</p>
          </div>
      </div>
    </>
  )
}

export default Github;