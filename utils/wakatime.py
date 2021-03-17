import requests
import json


class Wakatime:
    def __init__(self):
        self.api_key = "21d804bc-1b0e-498d-b760-364754cbc479"

    @staticmethod
    def make_request(method: str, url: str):
        return requests.request(method, url)

    def get_data(self):
        url = f"https://wakatime.com/api/v1/users/current/stats/last_7_days?api_key={self.api_key}"
        return json.loads(self.make_request("get", url=url).text)

    def parse_data(self):
        for data in self.get_data()["data"]["languages"]:
            if data["name"] == "Python":
                return data["hours"]
