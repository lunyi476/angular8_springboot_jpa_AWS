function formatDate(userDate) {
    // format from M/D/YYYY to YYYYMMDD
    let g = userDate;
    let g2 = g.split('/', 3);

    g = g2[2] + ((g2[0].length ==1) ? '0'+g2[0] : g2[0]) + ((g2[1].length ==1) ? '0'+g2[1] : g2[1]);

    return g;

  }
  
console.log(formatDate("12/31/2014"));

  /**
   * Write a function that converts user entered date formatted 
   * as M/D/YYYY to a format required by an API (YYYYMMDD). 
   * The parameter "userDate" and the return value are strings.

    For example, it should convert user entered date "12/31/2014" 
    to "20141231" suitable for the API.**/