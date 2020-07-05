import https from "https";

interface Params {
  email: string;
  event?: string;
  link?: string;
  page?: string;
  properties?: Properties;
}

interface Properties {
  [key: string]: string;
}

export class sibTracker {
  apiKey: string;
  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }
  private async post(endpoint: string, params: Params): Promise<boolean> {
    const options = {
      hostname: "in-automate.sendinblue.com",
      port: 443,
      path: `/api/v2/${endpoint}`,
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "ma-key": this.apiKey,
      },
    };
    return new Promise((resolve, reject) => {
      const req = https.request(options, (res: any) => {
        if (res.statusCode == 204) {
          resolve(true);
        } else if (res.statusCode == 400) {
          resolve(false);
        }
      });
      req.on("error", (e: any) => {
        reject(e);
      });
      req.write(JSON.stringify(params));
      req.end();
    });
  }

  public async identify(
    email: string,
    properties?: Properties
  ): Promise<boolean> {
    let params: Params = {
      email: email,
    };
    if (properties) {
      params.properties = properties;
    }
    return await this.post("identify", params);
  }

  public async trackEvent(
    email: string,
    event: string,
    properties?: Properties
  ): Promise<boolean> {
    let params: Params = {
      email: email,
      event: event,
    };
    if (properties) {
      params.properties = properties;
    }
    return await this.post("trackEvent", params);
  }

  public async trackLink(
    email: string,
    link: string,
    properties?: Properties
  ): Promise<boolean> {
    let params: Params = {
      email: email,
      link: link,
    };
    if (properties) {
      params.properties = properties;
    }
    return await this.post("trackLink", params);
  }

  public async trackPage(
    email: string,
    page: string,
    properties?: Properties
  ): Promise<boolean> {
    let params: Params = {
      email: email,
      page: page,
    };
    if (properties) {
      params.properties = properties;
    }
    return await this.post("trackPage", params);
  }
}
