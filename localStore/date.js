export const today = ()=> {
    const date = new Date();
    let dd   = date.getDate();
    let mm   = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    dd = (dd < 10) ? '0' + dd : dd;
    mm = (mm < 10) ? '0' + mm : mm;

    return yyyy + '-' + mm + '-' + dd;
}
