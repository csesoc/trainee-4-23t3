import '../github/Github.css'
import scale from '../../assets/github.png'

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
  let idx = 1;
  if (isLeapYear()) {
    while (idx <= 366) {
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
      githubHash.set(dateString, 0);
      idx = idx + 1
    }
  } else {
    while (idx <= 365) {
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
      githubHash.set(dateString, 0);
      idx = idx + 1
    }
  }

  return (
    <>
      <div className='github-total-container'>
        <p className="xaxis">
          <span className="nowrap">Jan</span>
          <span className="nowrap">Feb</span>
          <span className="nowrap">March</span>
          <span className="nowrap">April</span>
          <span className="nowrap">May</span>
          <span className="nowrap">June</span>
          <span className="nowrap">July</span>
          <span className="nowrap">Aug</span>
          <span className="nowrap">Sept</span>
          <span className="nowrap">Oct</span>
          <span className="nowrap">Nov</span>
          <span className="nowrap">Dec</span>
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
        <div className='position-github-scale'>
          <span className='span-github-scale-style-less'>Less</span>&nbsp;&nbsp;
          <img className='github-scale-style' src={scale} alt="Description of the image" />
          &nbsp;&nbsp;<span className='span-github-scale-style-more'>More</span>
        </div>
      </div>
    </>
  )
}

export default Github;