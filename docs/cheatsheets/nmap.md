# 🛰️ Nmap Cheatsheet – Scanning, Output & Performance

## 🔍 Scanning Options

| Option                    | Description                                                                |
|---------------------------|-----------------------------------------------------------------------------|
| `10.10.10.0/24`           | Target network range.                                                       |
| `-sn`                     | Disables port scanning.                                                     |
| `-Pn`                     | Disables ICMP Echo Requests.                                                |
| `-n`                      | Disables DNS Resolution.                                                    |
| `-PE`                     | Ping scan using ICMP Echo Requests.                                         |
| `--packet-trace`          | Shows all packets sent and received.                                        |
| `--reason`                | Displays the reason for a specific result.                                  |
| `--disable-arp-ping`      | Disables ARP Ping Requests.                                                 |
| `--top-ports=<num>`       | Scans top `<num>` most common ports.                                        |
| `-p-`                     | Scan all ports.                                                             |
| `-p22-110`                | Scan ports between 22 and 110.                                              |
| `-p22,25`                 | Scan specific ports (22 and 25).                                            |
| `-F`                      | Scan top 100 ports.                                                         |
| `-sS`                     | TCP SYN scan.                                                               |
| `-sA`                     | TCP ACK scan.                                                               |
| `-sU`                     | UDP scan.                                                                   |
| `-sV`                     | Detect service versions.                                                    |
| `-sC`                     | Run default script scan.                                                    |
| `--script <script>`       | Run specific scripts.                                                       |
| `-O`                      | OS detection.                                                               |
| `-A`                      | Aggressive scan (OS, version, traceroute).                                  |
| `-D RND:5`                | Use 5 random decoys.                                                        |
| `-e`                      | Specify network interface.                                                  |
| `-S 10.10.10.200`         | Specify source IP address.                                                  |
| `-g`                      | Specify source port.                                                        |
| `--dns-server <ns>`       | Use specific DNS server.                                                    |

---

## 🧾 Output Options

| Option          | Description                                                    |
|-----------------|----------------------------------------------------------------|
| `-oA filename`  | Output in all formats (normal, grepable, XML) with base name.  |
| `-oN filename`  | Output in normal format.                                       |
| `-oG filename`  | Output in grepable format.                                     |
| `-oX filename`  | Output in XML format.                                          |

---

## ⚙️ Performance Options

| Option                         | Description                                               |
|--------------------------------|-----------------------------------------------------------|
| `--max-retries <num>`          | Set number of retries per port.                           |
| `--stats-every=5s`             | Show status every 5 seconds.                              |
| `-v` / `-vv`                   | Verbose / very verbose output.                            |
| `--initial-rtt-timeout 50ms`   | Set initial RTT timeout.                                  |
| `--max-rtt-timeout 100ms`      | Set maximum RTT timeout.                                  |
| `--min-rate 300`               | Minimum number of packets per second.                     |
| `-T <0–5>`                     | Timing template (0 = paranoid, 5 = insane).               |
