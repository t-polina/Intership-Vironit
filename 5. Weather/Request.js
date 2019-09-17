class Request {
  async  returnRequest(url){
       return await this.makeReq(url)
    }
    makeReq(url) {
        return new Promise((resolve) => {
            fetch(url)
                .then(res => res.json()
                    .then((data) => {
                        resolve(data)
                    }))
        });
}
}