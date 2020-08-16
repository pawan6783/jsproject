export function create(title,author,pubDate){
    var publicAPI = {
        print(){
            printDetails(title,author,pubDate);
        }
    };
    return publicAPI;
}