import 'package:flutter/material.dart';

class CustomerHomeScreen extends StatelessWidget {
  const CustomerHomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final features = [
      'Simular sistema solar',
      'Solicitar orçamento',
      'Acompanhar instalação',
      'Chat com integradores'
    ];

    return Scaffold(
      appBar: AppBar(title: const Text('App Cliente Solar')),
      body: ListView.builder(
        itemCount: features.length,
        itemBuilder: (context, index) => ListTile(
          leading: const Icon(Icons.sunny),
          title: Text(features[index]),
        ),
      ),
    );
  }
}
