---
layout: page
title: Towards synthetic data augmentation for Lecture Slide Understanding
description: SynSlideGen is a synthetic data generation pipeline that creates realistic, annotated lecture slides through an LLM-powered generation pipeline. Designed to support tasks like slide element detection and retrieval, it leverages structured text to generate diverse layouts and semantic content. SynSlideGen addresses the scarcity of annotated educational data through scalable automation.
img: assets/img/synslidegen/fig1.pdf
importance: 3
category: research
date: 2024-12-01
tags: ["Document AI", "Computer Vision", "Synthetic Data"]
in_preparation: true
---

<div class="text-center mb-3" style="font-size: 1.5rem; font-weight: bold;">
  <!-- <a href="/assets/pdf/SynSlideGen_ICDAR2025.pdf" target="_blank" style="color: #007bff;">[Report]</a> -->
  <!-- <a href="https://github.com/yourusername/synslidegen" target="_blank" style="color: #007bff; margin-left: 5px;">[Code]</a> -->
  <!-- <a href="https://yourdomain.com/slides/synslidegen" target="_blank" style="color: #007bff; margin-left: 5px;">[Slides]</a> -->
</div>
<i>Work under submission. Paper and Code releasing soon!</i>

<h2>Abstract</h2>
<p>
Lecture slide element detection and retrieval, key tasks in lecture slide understanding, have gained significant attention in the multi-modal research community. However, annotating large volumes of lecture slides for supervised training is labor intensive and domain specific. To address this, we propose a large language model (LLM)-guided Synthetic Lecture Slide Generation <b>SynLecSlideGen</b> pipeline that produces high-quality, coherent slides, named as <b>SynSlide</b> dataset, closely resembling real lecture slides. We also create an evaluation benchmark <b>RealSlide</b> by manually annotating 1050 real slides curated from lecture presentation decks. To evaluate the effectiveness of <b>SynSlide</b> dataset, we perform few-shot transfer learning on real slides using models pre-trained on our synthetically generated slides. Experimental results show that few-shot transfer learning outperforms training only on the real dataset especially in low resource settings, demonstrating that synthetic slides can be a valuable pre-training resource in labeled data scarce real-world scenarios.
</p>

<div class="row">
  <div class="col-sm mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/synslidegen/fig1.pdf" title="Overview of SynSlideGen Pipeline" class="img-fluid rounded" %}
  </div>
</div>

