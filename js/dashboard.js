// 服务器状态
fetch("https://api.ranmc.cc/chart?type=status")
  .then(res => res.json())
  .then(res => {
    if (res.code !== 200 || !res.data) return;

    const container = document.getElementById("serverStatus");
    container.innerHTML = "<h3>服务器线路状态</h3>";

    for (const item of res.data) {
      const div = document.createElement("div");
      div.className = "status-item";

      // 选择延迟颜色
      let delayColor = "";
      if (!item.status) {
        delayColor = "gray";
      } else if (item.latency <= 150) {
        delayColor = "green";
      } else if (item.latency <= 300) {
        delayColor = "orange";
      } else {
        delayColor = "red";
      }

      div.innerHTML = `
        <span>${item.host}</span>
        <span>
          ${item.status ? "🟢" : "🔴"} 
          ${item.status ? `<span style="color:${delayColor}">${item.latency} ms</span>` : "离线"}
        </span>
      `;
      container.appendChild(div);
    }

    if (res.time) {
      const date = new Date(res.time);
      const formatted = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
      const updateDiv = document.createElement("div");
      updateDiv.className = "status-update";
      updateDiv.textContent = `上次更新时间 ${formatted}`;
      container.appendChild(updateDiv);
    }
  });

// 纪念套装销售统计
$(function() {
  $.get('https://api.ranmc.cc/chart?type=season', function(res) {
    if (res.code === 200 && res.data) {
      const loading = document.getElementById('seasonLoading');
      if (loading) {
          loading.remove();
      }
      const labels = Object.keys(res.data);
      const data = Object.values(res.data);
      const ctx = document.getElementById('seasonChart').getContext('2d');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: '销售数量',
            data: data,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
              title: { display: true, text: '数量' }
            },
            x: {
              title: { display: true, text: '纪念套装' }
            }
          },
          plugins: {
            legend: { display: false },
            title: { display: true, text: '纪念套装销售统计' }
          }
        }
      });
    }
  });
});

// TPS / MSPT / 在线玩家趋势
fetch("https://api.ranmc.cc/chart?type=tps")
  .then(res => res.json())
  .then(res => {
    if (res.code !== 200 || !res.data) return;

    const loading = document.getElementById('tpsLoading');
    if (loading) loading.remove();

    // 时间顺序从早到晚
    const data = res.data.reverse();

    // 解析数据（保留 1 位小数）
    const times = data.map(e => `${e.time}`);
    const tpsValues = data.map(e => Number(Number(e.tps).toFixed(1)));
    const msptValues = data.map(e => Number(Number(e.mspt).toFixed(1)));
    const playerValues = data.map(e => Number(e.player));

    const ctx = document.getElementById("tpsChart").getContext("2d");

    new Chart(ctx, {
      type: "line",
      data: {
        labels: times,
        datasets: [
          {
            label: "TPS",
            data: tpsValues,
            yAxisID: "y1",
            borderColor: "rgba(54,162,235,1)",
            backgroundColor: "rgba(54,162,235,0.3)",
            tension: 0.3,
            fill: false
          },
          {
            label: "MSPT",
            data: msptValues,
            yAxisID: "y3",
            borderColor: "rgba(75,192,192,1)",
            backgroundColor: "rgba(75,192,192,0.3)",
            tension: 0.3,
            fill: false
          },
          {
            label: "玩家数",
            data: playerValues,
            yAxisID: "y2",
            borderColor: "rgba(255,99,132,1)",
            backgroundColor: "rgba(255,99,132,0.3)",
            tension: 0.3,
            fill: false
          }
        ]
      },
      options: {
        responsive: true,
        interaction: { mode: "index", intersect: false },
        stacked: false,
        scales: {
          y1: {
            type: "linear",
            position: "left",
            title: { display: true, text: "TPS" },
            min: 0,
            max: 20,
            ticks: {
              stepSize: 5,
              callback: value => Number(value).toFixed(1)
            }
          },
          y2: {
            type: "linear",
            position: "right",
            title: { display: true, text: "玩家数" },
            grid: { drawOnChartArea: false }
          },
          y3: {
            type: "linear",
            position: "right",
            title: { display: true, text: "MSPT" },
            grid: { drawOnChartArea: false },
            offset: true,
            ticks: {
              callback: value => Number(value).toFixed(1)
            }
          },
          x: {
            title: { display: true, text: "时间" }
          }
        },
        plugins: {
          title: {
            display: true,
            text: "在线玩家及服务器性能趋势"
          },
          legend: {
            position: "top"
          },
          tooltip: {
            callbacks: {
              label: function(context) {
                if (context.dataset.label === "TPS" || context.dataset.label === "MSPT") {
                  return `${context.dataset.label}: ${Number(context.raw).toFixed(1)}`;
                }
                return `${context.dataset.label}: ${context.raw}`;
              }
            }
          }
        }
      }
    });
  })
  .catch(err => {
    console.error("图表数据加载失败:", err);
  });

// PVP 段位统计
fetch("https://api.ranmc.cc/chart?type=pvp")
  .then(res => res.json())
  .then(res => {
    if (res.code !== 200 || !res.data) return;

    const loading = document.getElementById('pvpLoading');
    if (loading) {
        loading.remove();
    }

    const labels = Object.keys(res.data);
    const data = Object.values(res.data);

    const ctx = document.getElementById("pvpChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [{
          label: "人数",
          data: data,
          backgroundColor: "rgba(75,192,192,0.6)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: "人数" }
          },
          x: {
            title: { display: true, text: "段位" }
          }
        },
        plugins: {
          legend: { display: false },
          title: { display: true, text: "PVP 段位统计" }
        }
      }
    });
  });
